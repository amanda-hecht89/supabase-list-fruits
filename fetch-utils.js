const SUPABASE_URL = 'https://lrkvacapghknfzyfbduq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxya3ZhY2FwZ2hrbmZ6eWZiZHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDMzNzksImV4cCI6MTk2Nzg3OTM3OX0.R4JDMarLJDInohMRIVMNLERvl6nc2GLUQI8t5Dt8mFw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getFruit() {
    const resp = await client.from('Fruits').select('*');
    return resp.data;
}
export async function getFruitById(id) {
    const resp = await client.from('Fruits').select('*').match({ id }).single();
    return resp.data;

}