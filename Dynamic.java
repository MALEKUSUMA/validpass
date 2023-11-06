class class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Cat meows");
    }
}

public class DynamicBindingExample {
    public static void main(String[] args) {
        Animal myAnimal;

        myAnimal = new Dog(); // Creating a Dog object
        myAnimal.makeSound(); // Calls the makeSound() of Dog

        myAnimal = new Cat(); // Creating a Cat object
        myAnimal.makeSound(); // Calls the makeSound() of Cat
    }
}
