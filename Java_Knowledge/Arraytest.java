import java.util.Arrays;

public class arraytest {
    public static void main(String[] args) {

        int[] array1 = new int[] {1, 2, 3, 4};
        int[] array2 = new int[] {5, 6, 7, 8};
        int[] array3 = array1+array2;

        System.out.print(Arrays.toString(array3));
    
}    
}
