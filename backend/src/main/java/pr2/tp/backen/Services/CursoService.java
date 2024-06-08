package pr2.tp.backen.Services; 
  
import pr2.tp.backen.Repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import pr2.tp.backen.Modelo.Curso;

@Service
public class CursoService {

    @Autowired
    private CursoRepository courseRepository;

    public List<Curso> findAll() {
        return courseRepository.findAll();
    }

    public Optional<Curso> findById(Long id) {
        return courseRepository.findById(id);
    }

    public Curso save(Curso course) {
        return courseRepository.save(course);
    }

    public void deleteById(Long id) {
        courseRepository.deleteById(id);
    }
}
