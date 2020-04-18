(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{208:function(e,t,a){"use strict";a.r(t);var n=a(31),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-custom-docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-docker-image"}},[e._v("#")]),e._v(" Creating a Custom Docker Image")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#creating-the-dockerfile"}},[e._v("Creating the Dockerfile")])]),a("li",[a("a",{attrs:{href:"#installing-dependencies"}},[e._v("Installing Dependencies")])]),a("li",[a("a",{attrs:{href:"#creating-a-container-user"}},[e._v("Creating a Container User")])]),a("li",[a("a",{attrs:{href:"#work-directory-entrypoint"}},[e._v("Work Directory & Entrypoint")])]),a("li",[a("a",{attrs:{href:"#entrypoint-script"}},[e._v("Entrypoint Script")])]),a("li",[a("a",{attrs:{href:"#modifying-the-startup-command"}},[e._v("Modifying the Startup Command")])]),a("li",[a("a",{attrs:{href:"#run-the-command"}},[e._v("Run the Command")])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This tutorial uses examples from our "),a("a",{attrs:{href:"https://github.com/pterodactyl/images/tree/java",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("core:java")]),a("OutboundLink")],1),e._v(" docker image,\nwhich can be found on Github. This tutorial also assumes some knowledge of "),a("a",{attrs:{href:"https://docker.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(", we suggest\nreading up if this all looks foreign to you.")])]),e._v(" "),a("h2",{attrs:{id:"creating-the-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-dockerfile"}},[e._v("#")]),e._v(" Creating the Dockerfile")]),e._v(" "),a("p",[e._v("The most important part of this process is to create the "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Dockerfile")]),a("OutboundLink")],1),e._v("\nthat will be used by the Daemon. Due to heavy restrictions on server containers, you must setup this file in a specific manner.")]),e._v(" "),a("p",[e._v("We try to make use of "),a("a",{attrs:{href:"https://alpinelinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alpine Linux"),a("OutboundLink")],1),e._v(" as much as possible for our images in order to keep their size down.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ----------------------------------")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Pterodactyl Core Dockerfile")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Environment: Java")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Minimum Panel Version: 0.6.0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ----------------------------------")]),e._v("\nFROM openjdk:8-jdk-alpine\n\nMAINTAINER Pterodactyl Software, "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("support@pterodactyl.io"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\nRUN apk "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" --no-cache --update "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" ca-certificates openssl "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" sqlite fontconfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" adduser -D -h /home/container container\n\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v(" container\nENV  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("container "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/container\n\nWORKDIR /home/container\n\nCOPY ./entrypoint.sh /entrypoint.sh\n\nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/bin/bash"')]),e._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/entrypoint.sh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("Lets walk through the "),a("code",[e._v("Dockerfile")]),e._v(" above. The first thing you'll notice is the "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#from",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("FROM")]),a("OutboundLink")],1),e._v(" declaration.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("FROM openjdk:8-jdk-alpine\n")])])]),a("p",[e._v("In this case, we are using "),a("a",{attrs:{href:"https://github.com/docker-library/openjdk",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("openjdk:8-jdk-alpine")]),a("OutboundLink")],1),e._v(" which provides us with Java 8.")]),e._v(" "),a("h2",{attrs:{id:"installing-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies"}},[e._v("#")]),e._v(" Installing Dependencies")]),e._v(" "),a("p",[e._v("The next thing we do is install the dependencies we will need using Alpine's package manager: "),a("code",[e._v("apk")]),e._v(". You'll notice some\nspecific flags that keep the container small, including "),a("code",[e._v("--no-cache")]),e._v(", as well as everything being contained in a\nsingle "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#run",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("RUN")]),a("OutboundLink")],1),e._v(" block.")]),e._v(" "),a("h2",{attrs:{id:"creating-a-container-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-container-user"}},[e._v("#")]),e._v(" Creating a Container User")]),e._v(" "),a("p",[e._v("Within this "),a("code",[e._v("RUN")]),e._v(" block, you'll notice the "),a("code",[e._v("useradd")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("adduser -D -h /home/container container\n")])])]),a("p",{staticClass:"callout warning"},[e._v("All Pterodactyl containers must have a user named `container`, and the user home **must** be `/home/container`.")]),e._v(" "),a("p",[e._v("After we create that user, we then define the default container "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#user",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("USER")]),a("OutboundLink")],1),e._v("\nas well as a few "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#env",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ENV")]),a("OutboundLink")],1),e._v(" settings to be applied to things running\nwithin the container.")]),e._v(" "),a("h2",{attrs:{id:"work-directory-entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-directory-entrypoint"}},[e._v("#")]),e._v(" Work Directory & Entrypoint")]),e._v(" "),a("p",[e._v("One of the last things we do is define a "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#workdir",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("WORKDIR")]),a("OutboundLink")],1),e._v(" which\nis where everything else will be executed. The "),a("code",[e._v("WORKDIR")]),e._v(" must be set the "),a("code",[e._v("/home/container")]),e._v(".")]),e._v(" "),a("p",[e._v("Finally, we need to copy our "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#entrypoint",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ENTRYPOINT")]),a("OutboundLink")],1),e._v(" script into\nthe docker image root. This is done using "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#copy",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("COPY")]),a("OutboundLink")],1),e._v(", after which\nwe define the command to be used when the container is started using "),a("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#cmd",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("CMD")]),a("OutboundLink")],1),e._v(".\nThe "),a("code",[e._v("CMD")]),e._v(" line should always point to the "),a("code",[e._v("entrypoint.sh")]),e._v(" file.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("COPY ./entrypoint.sh /entrypoint.sh\nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/bin/bash"')]),e._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/entrypoint.sh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("h2",{attrs:{id:"entrypoint-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-script"}},[e._v("#")]),e._v(" Entrypoint Script")]),e._v(" "),a("p",[e._v("In order to complete this "),a("code",[e._v("Dockerfile")]),e._v(", we will need an "),a("code",[e._v("entrypoint.sh")]),e._v(" file which tells Docker how to run this\nspecific server type.")]),e._v(" "),a("p",[e._v("These entrypoint files are actually fairly abstracted, and the Daemon will pass in the start command as an environment\nvariable before processing it and then executing the command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/bash")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/container\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Output Current Java Version")]),e._v("\njava -version "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("## only really needed to show what version is being used. Should be changed for different applications")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Replace Startup Variables")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MODIFIED_STARTUP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("eval")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("$(")]),e._v("echo $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("STARTUP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/{{/${/g'")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/}}/}/g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('":/home/container$ '),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${MODIFIED_STARTUP}")]),e._v('"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run the Server")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${MODIFIED_STARTUP}")]),e._v("\n")])])]),a("p",[e._v("The second command, "),a("code",[e._v("cd /home/container")]),e._v(", simply ensures we are in the correct directory when running the rest of the\ncommands. We then follow that up with "),a("code",[e._v("java -version")]),e._v(" to output this information to end-users, but that is not necessary.")]),e._v(" "),a("h2",{attrs:{id:"modifying-the-startup-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modifying-the-startup-command"}},[e._v("#")]),e._v(" Modifying the Startup Command")]),e._v(" "),a("p",[e._v("The most significant part of this file is the "),a("code",[e._v("MODIFIED_STARTUP")]),e._v(" environment variable. What we are doing in this case\nis parsing the environment "),a("code",[e._v("STARTUP")]),e._v(" that is passed into the container by the Daemon. In most cases, this variable\nlooks something like the example below:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("STARTUP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}"')]),e._v("\n")])])]),a("div",{pre:!0},[a("p",[e._v("You'll notice some placeholders there, specifically "),a("code",[e._v("{{SERVER_MEMORY}}")]),e._v(" and "),a("code",[e._v("{{SERVER_JARFILE}}")]),e._v(". These both refer to\nother environment variables being passed in, and they look something like the example below.")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SERVER_MEMORY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SERVER_JARFILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("server.jar\n")])])]),a("p",[e._v("There are a host of different environment variables, and they change depending on the specific service option\nconfiguration. However, that is not necessarily anything to worry about here.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MODIFIED_STARTUP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("eval")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("$(")]),e._v("echo $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("STARTUP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/{{/${/g'")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/}}/}/g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n")])])]),a("div",{pre:!0},[a("p",[e._v("The command above simply evaluates the "),a("code",[e._v("STARTUP")]),e._v(" environment variable, and then replaces anything surrounded in\ncurly braces "),a("code",[e._v("{{EXAMPLE}}")]),e._v(" with a matching environment variable (such as "),a("code",[e._v("EXAMPLE")]),e._v("). Thus, our "),a("code",[e._v("STARTUP")]),e._v(" command:")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -Xms128M -Xmx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("SERVER_MEMORY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("M -jar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("SERVER_JARFILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Becomes:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -Xms128M -Xmx1024M -jar server.jar\n")])])]),a("h2",{attrs:{id:"run-the-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-command"}},[e._v("#")]),e._v(" Run the Command")]),e._v(" "),a("p",[e._v("The last step is to run this modified startup command, which is done with the line "),a("code",[e._v("${MODIFIED_STARTUP}")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);