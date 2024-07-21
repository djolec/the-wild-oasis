import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://amnzaansfthptsxcdnvy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbnphYW5zZnRocHRzeGNkbnZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzOTM1MDQsImV4cCI6MjAzNDk2OTUwNH0.uMGZpq8B7Uj7PDUNVfl8Nia9bE5ksW1xIkPed7UhWX4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
