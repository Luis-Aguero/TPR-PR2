package pr2.tp.backen.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import pr2.tp.backen.Modelo.Contactos;
import pr2.tp.backen.Services.ContactosService;

@RestController
@RequestMapping("/Contact")
public class ContactosController {

    @Autowired
    private ContactosService ContactService;

    @GetMapping
    public List<Contactos> listContactoss(Model model) { 
        return ContactService.findAll();
    }

    @GetMapping("/{id}")
    public Contactos showContactosFormId(@PathVariable Long id) {
        return ContactService.findById(id).get(); 
    }

    @PostMapping("")
    public Contactos saveContactos(@RequestBody Contactos Contact) { 
        return ContactService.save(Contact);
    }

    @PutMapping("")
    public Contactos updateContactos(@RequestBody Contactos Contact) {
        return ContactService.save(Contact);
    }

    @DeleteMapping("/{id}")
    public Long deleteContactos(@PathVariable Long id) {
        ContactService.deleteById(id);
        return id;
    }
}
