public class Main {

    private static Integer binarySearch(int[] array, int target) {
        int min = 0;
        int max = array.length - 1;

        while(min <= max) {
            int middle = (min + max) / 2;
            int guess = array[middle];

            if (guess == target) {
                return middle;
            }

            if (guess > target) {
                max = middle - 1;
            } else {
                min = middle + 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        System.out.println(binarySearch(new int[]{1, 2, 3, 4, 5, 6, 7, 9, 10}, 3)); // Should return 2
        System.out.println(binarySearch(new int[]{10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110}, 90)); // Should return 8
        System.out.println(binarySearch(new int[]{5, 6, 7, 10}, 67)); // Should return null
        System.out.println(binarySearch(new int[]{56, 87, 92, 102}, 226)); // Should return null
        
    }
}