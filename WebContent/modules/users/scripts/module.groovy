import org.metamorphosis.core.ActionSupport
import org.metamorphosis.core.User
import static groovy.json.JsonOutput.toJson as json

class ModuleAction extends ActionSupport {

	def user = new User()
	
	def login()  {
	    session.setAttribute("user",user)
		def url = request.contextPath+"/dashboard"
		response.writer.write(json([url: url]))
	}
	
	def logout() {
	    session.removeAttribute("user")
		def url = request.contextPath+"/"
		response.sendRedirect(url)
	}
	
}

new ModuleAction()