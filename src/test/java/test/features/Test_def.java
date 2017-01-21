package test.features;

import cucumber.api.java.en.Given;

/**
 * Created by eminence on 13-01-17.
 */
public class Test_def {

    @Given("^I open the application$")
    public void home() throws Throwable {
        System.out.println("When i open the application");
    }


}
