import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    private static List<Integer> selectionSort(List<Integer> array) {
        List<Integer> sortedArray = new ArrayList<>(array.size());

        int arraySize = array.size();

        for (int counter = 0; counter < arraySize; counter++) {
            int index = findSmallestIndex(array);

            sortedArray.add(array.get(index));

            array.remove(index);
        }

        return sortedArray;
    }

    private static int findSmallestIndex(List<Integer> array) {
        int smallestIndex = 0;
        int smallestValue = array.get(0);

        for (int counter = 1; counter < array.size(); counter++) {
            if (array.get(counter) < smallestValue) {
                smallestIndex = counter;
                smallestValue = array.get(counter);
            }
        }

        return smallestIndex;
    }

    public static void main(String[] args) {
        List<Integer> array1 = new ArrayList<>(Arrays.asList(5, 3, 60, -2, 10));
        List<Integer> array2 = new ArrayList<>(Arrays.asList(3, 10, 4, 1, 7));
        List<Integer> array3 = new ArrayList<>(Arrays.asList(100, 7, -1, -99, 8, 2092, 700));
        System.out.println(selectionSort(array1)); // Should return [-2, 3, 5, 10, 60]
        System.out.println(selectionSort(array2)); // Should return [1, 3, 4, 7, 10]
        System.out.println(selectionSort(array3)); // Should return [-99, -1, 7, 8, 100, 700, 2092]
    }
}