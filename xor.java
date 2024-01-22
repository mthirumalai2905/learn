class xor{
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5,6,6,7,8,9};
        int result = 0;

        for(int i=0; i<nums.length; i++){
            result ^= nums[i];
        }

        System.out.println(result);
    }
}