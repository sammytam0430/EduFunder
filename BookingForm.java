import java.sql.Date;
import java.sql.Time;
import java.util.Scanner;

public class BookingForm {
	private Scanner s;
	private boolean confirmed = false;
	private Appointment appointment;
	
	public void showMenu() {
		
	}

	public void createAppointment(Client client) {
		this.appointment = new Appointment();
		s = new Scanner(System.in);
		while (!confirmed) {
			getDate();
			getTime();
			getDog(client);
			getDuration();
			getLocations();
			System.out.println(appointmentDetail());
			getOption();
			if (confirmed) {
				printConfirmation();
			}
		}
	}

	private void getDate() {
		System.out.println("Please enter the date of the appointment (YYYY-MM-DD).");
		String[] date = s.next().split("-");
		int year = Integer.parseInt(date[0]) - 1900;
		int month = Integer.parseInt(date[1]) - 1;
		int day = Integer.parseInt(date[2]);
		appointment.setDate(new Date(year, month, day));
	}

	private void getTime() {
		System.out.println("Please enter the time of the appointment (HH:MM).");
		String[] time = s.next().split(":");
		int hour = Integer.parseInt(time[0]);
		int minute = Integer.parseInt(time[1]);
		appointment.setTime(new Time(hour, minute, 0));
	}

	private void getDog(Client client) {
		System.out.println("Which dog would you like us to walk.");
		for (Dog dog : client.getDogs()) {
			System.out.println(dog.getName());
		}

		Dog dog = null;
		while (null == dog) {
			String name = s.next();
			dog = client.getDog(name);
			appointment.setDog(dog);
			if (null == dog)
				System.out.println("Please enter a valid dog name");
		}
	}

	private void getDuration() {
		double duration = 0;
		System.out.println("How long would you like your dog to be walked (1 - 30 minutes, 2 - 1 hour)");
		while (0 == duration) {
			switch (s.nextInt()) {
			case 1:
				duration = 0.5;
				appointment.setDuration(duration);
				break;
			case 2:
				duration = 1;
				appointment.setDuration(duration);
				break;
			default:
				System.out.println("Invalid input, please enter 1 for 30 minutes or 2 for 1 hour");
				break;
			}
		}
	}

	public void getLocations() {
		System.out.println("Where would you like your dog to be picked up at");
		appointment.setPickUp(s.next());

		System.out.println("Where would you like your dog to be dropped off at");
		appointment.setDropOff(s.next());
	}

	public void getOption() {
		System.out.println("Enter 'yes' to confirm, 'modify' to edit, 'cancel' to exit");
		switch (s.next()) {
		case "yes":
			confirmed = true;
			break;
		case "modify":
			confirmed = false;
			break;
		case "cancel":
			appointment = null;
			System.out.println("Exiting.....");
			System.exit(0);
		}
	}

	public String appointmentDetail() {
		return "================================================" + "\nDate: " + appointment.getDate().toString()
				+ "\nTime: " + appointment.getTime().toString() + "\nDog: " + appointment.getDog().getName()
				+ "\nDuration: " + appointment.getDuration() + " hour" + "\nPick Up Location: "
				+ appointment.getPickUp() + "\nDrop Off Location: " + appointment.getDropOff()
				+ "\n================================================";
	}

	public void printConfirmation() {
		System.out.println("Thank you for the appointment to walk " + appointment.getDog().getName() + ", on "
				+ appointment.getDate() + ", at " + appointment.getTime() + ".\nWe will pickup "
				+ appointment.getDog().getName() + " at " + appointment.getPickUp() + " and drop off "
				+ appointment.getDog().getName() + " at " + appointment.getDropOff() + ".\nWe will walk "
				+ appointment.getDog().getName() + " for " + appointment.getDuration() + " hour.");
	}
}
