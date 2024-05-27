import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class SwaggerConfig {
    
    @Bean
    public OpenAPI openApi(){
        return new OpenAPI()
        .info(new Info()
        .title("Equipo 1---Gestión de aulas")
        .version("1.0")
        .description("Api para sistema de Gestión de Aulas UNLa")
        .termsOfService("http://swagger.io/terms/")
        .license(new License().name("Apache 2.0").url("https://springdoc.org/"))
        );
    }
}
