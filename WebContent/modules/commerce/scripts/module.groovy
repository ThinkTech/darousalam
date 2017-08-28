import org.metamorphosis.core.ActionSupport 
import static groovy.json.JsonOutput.toJson as json

class ModuleAction extends ActionSupport {

    def saveOrder() {
       response.writer.write(json([status: "1"]))
    }
    
}

new ModuleAction()