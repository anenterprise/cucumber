package test.features;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.lang.reflect.Method;

/**
 * Created by h176305 on 1/12/2017.
 */
public class BaseTest {

    @Before
    public void beforeScenario() {

        System.out.println("Before scenario");
    }

    @After
    public void afterScenario() {
        System.out.println("After scenario");
    }
}