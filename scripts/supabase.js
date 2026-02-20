import { createClient } from "https://esm.run/@supabase/supabase-js@2";

const supabase_url = `https://qczbdawkutzgobtldlqk.supabase.co`;
const supabase_key = `sb_publishable_YR2BtgttbTYpJif67pEpJA_0CH7PXmH`;

export const supabase = createClient(supabase_url, supabase_key);