import java.sql.Date;
import java.sql.Time;

public class Program {

	public static void main(String[] args) {
		Client client = new Client("Albert", "Wei", "aw@gmail.com", "6046666666");
		Dog dog = new Dog("Bart", "Simpson", 5, "Yellow", "Sassy", "A LOT");
		client.addDog(new Dog("Bobby", "Dobermann", 9, "White", "Chill", "None"));
		client.addDog(dog);
		client.addAppointment(new Appointment("201912251225", new Employee(), dog, new Date(2019, 11, 25),
				new Time(12, 25, 0), 1, "BCIT", "BCIT"));

		new BookingForm().showMenu(client);
	}

}
