import org.metamorphosis.core.ActionSupport
import org.metamorphosis.core.User
import static groovy.json.JsonOutput.toJson as json
import groovy.json.JsonSlurper


class ModuleAction extends ActionSupport {

	def login() {
	    def user = new JsonSlurper().parse(request.inputStream) 
		def url = request.contextPath+"/dashboard"
		response.writer.write(json([url: url]))
	}
	
	def logout() {
	    session.invalidate()
		def url = request.contextPath+"/"
		response.sendRedirect(url)
	}
	
}

new ModuleAction()