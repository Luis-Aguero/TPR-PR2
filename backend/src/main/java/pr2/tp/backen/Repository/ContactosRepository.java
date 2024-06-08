 
package pr2.tp.backen.Repository;

import pr2.tp.backen.Modelo.Contactos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactosRepository extends JpaRepository<Contactos, Long> {
}

