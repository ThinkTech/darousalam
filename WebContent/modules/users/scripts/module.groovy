import org.metamorphosis.core.ActionSupport
import org.metamorphosis.core.User
import static groovy.json.JsonOutput.toJson as json

class ModuleAction extends ActionSupport {

	def user = new User()
	
	def login()  {
	    session.setAttribute("user",user)
		def url = request.contextPath+"/management"
		response.writer.write(json([url: url]))
	}
	
	def logout() {
		SUCCESS
	}
	
}

new ModuleAction()