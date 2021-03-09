import java.util.Random;
import java.util.List;
import java.util.ArrayList;

public class pickatopic {

    public static void main(String[] args) {

        List<String> topics = new ArrayList<>();

        topics.add("Spring Boot");
        topics.add("ReactJS");
        topics.add("JavaScript");
        topics.add("Git");
        topics.add("Maven");
        topics.add("Junit 5");
        topics.add("Python");
        topics.add("C#");
        topics.add("Java");
        topics.add("JDBC");
        topics.add("Hibernate");
        topics.add("JavaFX");
        topics.add("SQL");
        topics.add("Docker");
        topics.add("NodeJS");

        
        Random rand = new Random();

        System.out.println("\nTodays topic is : " + topics.get(rand.nextInt(topics.size())));
    }
}
