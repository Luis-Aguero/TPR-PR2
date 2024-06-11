package pr2.tp.backen.Services; 
  
import pr2.tp.backen.Repository.InscripcionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import pr2.tp.backen.Modelo.Inscripcion;

@Service
public class InscripcionService {

    @Autowired
    private InscripcionRepository InscripRepository;

    public List<Inscripcion> findAll() {
        return InscripRepository.findAll();
    }

    public Optional<Inscripcion> findById(Long id) {
        return InscripRepository.findById(id);
    }

    public Inscripcion save(Inscripcion Inscrip) {
        return InscripRepository.save(Inscrip);
    }

    public void deleteById(Long id) {
        InscripRepository.deleteById(id);
    }
}
