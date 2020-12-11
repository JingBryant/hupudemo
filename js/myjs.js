function login() {
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		if (username == "whj" && password == "123456") {
			window.location.href = "index.html";
			return true;
		} else {
			alert("账号或密码错误");
			window.location.href = "login.html";
			return false;
		}
	}