package test.features;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/test/features",
        tags = "@Run",
        format = {"pretty", "html:target/Destination"}

)
public class TestRunner {


}
