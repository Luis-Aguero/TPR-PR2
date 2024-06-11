package pr2.tp.backen.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import pr2.tp.backen.Modelo.Curso;
import pr2.tp.backen.Services.CursoService;

@RestController
@RequestMapping("/course")
public class CursoController {

    @Autowired
    private CursoService courseService;

    @GetMapping
    public List<Curso> listCursos(Model model) { 
        return courseService.findAll();
    }

    @GetMapping("/{id}")
    public Curso showCursoFormId(@PathVariable Long id) {
        return courseService.findById(id).get(); 
    }

    @PostMapping("")
    public Curso saveCurso(@RequestBody Curso course) { 
        return courseService.save(course);
    }

    @PutMapping("")
    public Curso updateCurso(@RequestBody Curso course) {
        return courseService.save(course);
    }

    @DeleteMapping("/{id}")
    public Long deleteCurso(@PathVariable Long id) {
        courseService.deleteById(id);
        return id;
    }
}
