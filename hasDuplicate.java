class hasDuplicate{

    public static boolean containsDuplicate(String s1, String s2){
        int[] arr = new int[26];

        for(char ch : s1.toCharArray()){
            if(arr[ch - 'a'] > 0)
                return true;


                arr[ch - 'a']++;
            }

            for(char ch : s2.toCharArray()){
                if(arr[ch - 'a'] > 0)
                return true;
            }


         return false;
        }
    
    public static void main(String[] args){

        String s1 = "abcd";
        String s2 = "ehid";
        String s3 = "xyzas";
        String s4 = "lmno";

        System.out.println("Let's compare" + containsDuplicate(s1, s2));
        
        System.out.println("Let's compare" + containsDuplicate(s2, s3));
        
        System.out.println("Let's compare" + containsDuplicate(s3, s4));
    }
}
