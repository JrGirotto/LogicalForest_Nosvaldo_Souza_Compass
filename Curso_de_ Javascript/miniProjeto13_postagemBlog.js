//miniProjeto13_postagemBlog

function Post(title, message, autor, views, live) {
	this.title = title,
	this.message = message,
	this.autor = autor,
	this.views = views,
	this.comments = [{autor, message}], 
	this.live = live
};

var post1 = new Post('Foto', 'Fotografias', 'Jr Girotto', 10, true )
	console.log(post1);
	console.log(post1.comments); //auto declarável?