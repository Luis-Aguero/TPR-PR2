package pr2.tp.backen.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import pr2.tp.backen.Modelo.Alumno;
import pr2.tp.backen.Services.AlumnoService;

@RestController
@RequestMapping("/alumno")
public class AlumnoController {

    @Autowired
    private AlumnoService alumnoService;

    @GetMapping
    public List<Alumno> listAlumnos(Model model) { 
        return alumnoService.findAll();
    }

    @GetMapping("/{id}")
    public Alumno showAlumnoFormId(@PathVariable Long id) {
        return alumnoService.findById(id).get(); 
    }

    @PostMapping("")
    public Alumno saveAlumno(@RequestBody Alumno alumno) { 
        return alumnoService.save(alumno);
    }

    @PutMapping("")
    public Alumno updateAlumno(@RequestBody Alumno alumno) {
        return alumnoService.save(alumno);
    }

    @DeleteMapping("/{id}")
    public Long deleteAlumno(@PathVariable Long id) {
        alumnoService.deleteById(id);
        return id;
    }
}
