import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    private static int factorial(int number) {
        if (number == 1) return number;

        return number * factorial(number - 1);
    }
    public static void main(String[] args) {
        System.out.println(factorial(5)); // Should return 120
        System.out.println(factorial(1)); // Should return 1
        System.out.println(factorial(3)); // Should return 6
    }
}