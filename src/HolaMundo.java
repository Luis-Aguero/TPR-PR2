package pr2.tp.backen;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HolaMundo {

    @GetMapping("/hola")
    public String greeting() {
        return "<h1>Hola Mundo</h1>";
    }
}

//java -jar "target/backen-0.0.1-SNAPSHOT.jar" --DB_NAME=tp_pr2 --DB_USER=tp_pr2 --DB_PASSWORD=123 --DB_SERVER=localhost:5432