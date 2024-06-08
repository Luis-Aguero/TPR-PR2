package pr2.tp.backen.Services; 
  
import pr2.tp.backen.Repository.ContactosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import pr2.tp.backen.Modelo.Contactos;

@Service
public class ContactosService {

    @Autowired
    private ContactosRepository ContactRepository;

    public List<Contactos> findAll() {
        return ContactRepository.findAll();
    }

    public Optional<Contactos> findById(Long id) {
        return ContactRepository.findById(id);
    }

    public Contactos save(Contactos Contact) {
        return ContactRepository.save(Contact);
    }

    public void deleteById(Long id) {
        ContactRepository.deleteById(id);
    }
}
