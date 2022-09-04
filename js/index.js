const repo_api_url_base = "https://api.github.com/repos/HongBin2112/my_website/contents/";
const about_me_dl_url = "https://raw.githubusercontent.com/HongBin2112/my_website/main/assets/text/about_me.txt";


// render
set_greetings();
set_about_me_text();







function set_greetings(){
    const e_greetings = document.getElementsByClassName("greetings");

    for(let i=0; i<e_greetings.length; i++){
        e_greetings[i].innerHTML = greetings();
    }
}

function greetings(){
    const d = new Date();
    let hour = d.getHours();
    let s = "Hello,";

    if(hour >= 5 && hour < 12){
        s = "Good morning,";
    }
    else if(hour >= 12 && hour < 18){
        s = "Good afternoon,"
    }
    else if(hour >= 18 && hour < 24){
        s = "Good evening,"
    }

    return s;
}


function fetch_github_file(github_api_url) {

	const headers = new Headers();
	headers.append('Accept', 'application/vnd.github.v3+json');
	
	let promise_result;
	
	promise_result = fetch(github_api_url, {
		method: "GET",
		headers: headers
	})
	.then((response) => {		
		return response;
	})
	.catch((error) => {
		console.log(`Error: ${error}`);
	})
	
	return promise_result;
}


function get_about_me_text(){
    let about_me_txt = fetch_github_file(about_me_dl_url).then((contents) => {
        return contents.text();
    }).catch((error) => {
        console.log(`File to Text Error: ${error}`);
    })

    return about_me_txt;
}

function trans_about_me_text_to_html(texts){
    let texts_arr = texts.split('\n');
    let content = texts.split('\n');

    for(let i=0; i<texts_arr.length; i++){
        if(texts_arr[i] === "") { content[i] = "<br>" }
        else if(texts_arr[i][0] === "$") { content[i] = texts_arr[i].slice(1);}
        else{
            content[i] = "<p>" + texts_arr[i] + "</p>";
        }
    }

    return content.join("\n");
}

function set_about_me_text(){
    get_about_me_text().then((texts) => {
        let about_me_element = document.getElementById("about-me-text");
        let content = trans_about_me_text_to_html(texts);

        about_me_element.innerHTML = content;
    })

}




function print(variable){
    console.log(variable);
}