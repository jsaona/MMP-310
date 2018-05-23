var correct = [''];


var check = function (id) {
    var title = document.getElementById(id).value;

    axios.get('https://api.themoviedb.org/3/search/movie?api_key=fcc2c352e5986e303dae26b627bd15f7&language=en-US&query=' + title + '&page=1&include_adult=false')

        .then(response => {


            document.getElementById(id +"-movie").innerHTML = response.data.results[0].title
            document.getElementById(id + "-overview").innerHTML = response.data.results[0].overview
            // document.getElementById('f0').submit();
            axios.get('https://api.themoviedb.org/3/movie/' + response.data.results[0].id + '/recommendations?api_key=fcc2c352e5986e303dae26b627bd15f7&language=en-US&page=1')
                .then(result => {
                    console.log(onclick)
                });
        })
        .catch(err => {
            var message = document.getElementById("wrong");
            message.textContent = "Incorrect";

           
        });


}
