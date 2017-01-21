package test.features;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by h176305 on 1/12/2017.
 */
public class Test_Step {

    public static WebDriver driver;
    @Given("^User is on Home Page$")
    public void user_is_on_Home_Page() throws Throwable {
//        System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\src\\main\\resources\\drivers\\geckodriver.exe");
//        driver = new FirefoxDriver();
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\main\\resources\\drivers\\chromedriver.exe");
        DesiredCapabilities cap = DesiredCapabilities.chrome ();
        cap.setCapability (CapabilityType.ACCEPT_SSL_CERTS, true);
        driver=new ChromeDriver(cap);

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://www.store.demoqa.com");

    }

    @When("^User Navigate to LogIn Page$")
    public void user_Navigate_to_LogIn_Page() throws Throwable {
        driver.findElement(By.xpath(".//*[@id='account']/a")).click();
    }

    @When("^User enters Credentials to LogIn$")
    public void user_enters_testuser__and_Test(DataTable usercredentials) throws Throwable {
        List<List<String>> data = usercredentials.raw();
        driver.findElement(By.id("log")).sendKeys(data.get(0).get(0));
        driver.findElement(By.id("pwd")).sendKeys(data.get(0).get(1));
        driver.findElement(By.id("login")).click();
    }

    @Then("^Message displayed Login Successfully$")
    public void message_displayed_Login_Successfully() throws Throwable {
        System.out.println("Login Successfully");
    }

    @When("^User LogOut from the Application$")
    public void user_LogOut_from_the_Application() throws Throwable {
        driver.findElement(By.xpath(".//*[@id='account_logout']/a")).click();
    }

    @Then("^Message displayed LogOut Successfully$")
    public void message_displayed_LogOut_Successfully() throws Throwable {
        System.out.println("LogOut Successfully");
    }
/////////////////////////////////////////////////////////////////////////////////////////////

    @Given("^I open the application$")
    public void home() throws Throwable {
        System.out.println("When i open the application");
    }


    @When("^I enter username\"([^\"]*)\"$")
    public void I_enter_username(String arg1) throws Throwable {
        System.out.println(arg1);
    }

    @And("^I enter password\"([^\"]*)\"$")
    public void I_enter_password(String arg1) throws Throwable {
        System.out.println(arg1);
    }

    @Then("^I enter title\"([^\"]*)\"$")
    public void abc(String arg1) throws Throwable {
        System.out.println(arg1);
    }

    @And("^press submit")
    public void submit() throws Throwable {
        System.out.println("Submit button");
    }




}