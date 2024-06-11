package pr2.tp.backen.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import pr2.tp.backen.Modelo.Inscripcion;
import pr2.tp.backen.Services.InscripcionService;

@RestController
@RequestMapping("/Inscrip")
public class InscripcionController {

    @Autowired
    private InscripcionService InscripService;

    @GetMapping
    public List<Inscripcion> listInscripcions(Model model) { 
        return InscripService.findAll();
    }

    @GetMapping("/{id}")
    public Inscripcion showInscripcionFormId(@PathVariable Long id) {
        return InscripService.findById(id).get(); 
    }

    @PostMapping("")
    public Inscripcion saveInscripcion(@RequestBody Inscripcion Inscrip) { 
        return InscripService.save(Inscrip);
    }

    @PutMapping("")
    public Inscripcion updateInscripcion(@RequestBody Inscripcion Inscrip) {
        return InscripService.save(Inscrip);
    }

    @DeleteMapping("/{id}")
    public Long deleteInscripcion(@PathVariable Long id) {
        InscripService.deleteById(id);
        return id;
    }
}
