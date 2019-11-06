package lab;

import java.util.ArrayList;

public class Client {
	
	private String fName;
	private String lName;
	private String email;
	private String phoneNumber;
	private ArrayList<Dog> dogs;
	private ArrayList<Appointment> appointments;
	
	public Client(String fName, String lName, String email, String phoneNumber) {
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.dogs = new ArrayList<Dog>();
	}
	
	public void addDog(Dog dog) {
		dogs.add(dog);
	}
	
	public ArrayList<Dog> getDogs() {
		return dogs;
	}
	
	public Dog getDog(String name) {
		for(Dog dog : dogs) {
			if (dog.getName().equalsIgnoreCase(name))
				return dog;
		}
		return null;
	}
}
