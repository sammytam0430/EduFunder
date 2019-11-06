package lab;

public class Dog {

	private String name;
	private String breed;
	private int age;
	private String color;
	private String temperament;
	private String specialNeed;

	public Dog(String name, String breed, int age, String color, String temperament, String specialNeed) {
		this.name = name;
		this.breed = breed;
		this.age = age;
		this.color = color;
		this.temperament = temperament;
		this.specialNeed = specialNeed;
	}
	
	public String getName() {
		return name;
	}
}
