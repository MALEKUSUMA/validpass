import java.util.Scanner;

public class Sum {
    public static void main(String[] args) {
        // Create a Scanner object to accept user input
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        double number1 = scanner.nextDouble();

        System.out.print("Enter the second number: ");
        double number2 = scanner.nextDouble();

        // Close the scanner to release resources
        scanner.close();

        // Calculate the sum of the two numbers
        double sum = number1 + number2;

        System.out.println("The sum of " + number1 + " and " + number2 + " is: " + sum);
    }
}

