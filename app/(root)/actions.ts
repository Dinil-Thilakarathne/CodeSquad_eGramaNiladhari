"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // Basic validation
  if (!data.email || !data.password) {
    redirect("/error");
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error('Login error:', error.message);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/private");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const profileData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    username: formData.get("username") as string,
    nicNumber: formData.get("nicNumber") as string,
    houseNumber: formData.get("houseNumber") as string,
    streetName: formData.get("streetName") as string,
    addressLine2: formData.get("addressLine2") as string,
    province: formData.get("province") as string,
    gramaNiladhariNo: formData.get("gramaNiladhariNo") as string,
  };

  // Basic validation
  if (!data.email || !data.password || !profileData.name) {
    redirect("/error");
  }

  const { data: authData, error } = await supabase.auth.signUp(data);

  if (error) {
    console.error('Signup error:', error.message);
    redirect("/error");
  }

  // If user is created successfully, create their profile
  if (authData.user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        email: data.email,
        name: profileData.name,
        phone: profileData.phone,
        username: profileData.username,
        nic_number: profileData.nicNumber,
        house_number: profileData.houseNumber,
        street_name: profileData.streetName,
        address_line2: profileData.addressLine2,
        province: profileData.province,
        grama_niladhari_no: profileData.gramaNiladhariNo,
      });

    if (profileError) {
      console.error('Profile creation error:', profileError);
      // Don't redirect to error for profile creation issues, but log it
    }
  }

  revalidatePath("/", "layout");
  redirect("/private");
}
