fetch("https://api.github.com/users/rajeshpandey2053")
    .then(response => response.json())
    .then(function (data) {
        console.log(data)

        let followersCount = data['followers']
        let followersInfo=`I have been followed by ${followersCount} awesome people on GitHub`
        document.getElementById('profileImage').src = data['avatar_url']
        document.getElementById('fullName').textContent = data['name']
        document.getElementById('bio').textContent = data['bio']
        document.getElementById('followersInformation').textContent = followersInfo

        document.getElementById('githubLink').href = data['html_url']

        document.getElementById('maincontainer').hidden = false

        document.getElementById('loading').hidden = true




    })
fetch("https://api.github.com/users/rajeshpandey2053/repos")
    .then(response => response.json())
    .then(function (data) {
            let reposlist = [];
            for (let i = 0; i<4 ; i++) {
                    let temp = data[i];

                    reposlist.push(temp['name']);
            }
            console.log(reposlist);

            document.getElementById('firstRepo').textContent = reposlist[0];
            document.getElementById('secondRepo').textContent = reposlist[1];
            document.getElementById('thirdRepo').textContent = reposlist[2];
            document.getElementById('fourthRepo').textContent = reposlist[3];


    })