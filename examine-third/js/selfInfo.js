window.addEventListener('load', function() {
    var editBtn = document.querySelector('.edit-btn');
    var selfContainer = document.querySelector('.self-container');
    var selfInfo = document.querySelector('.self-information');
    editBtn.onclick = function() {
        selfContainer.style.display = 'block';
        selfInfo.style.display = 'none';
    }

    var selfListItem = document.querySelectorAll('.self-list-item');
    var moreList = document.querySelectorAll('#more-list');
    var more = document.querySelectorAll('.more');
    var myFollowingItem = document.getElementById('myFollowing-item');
    var followingBox = document.querySelector('.following-box');

    var articleBox = document.querySelector('.article-box');
    var theFollowing = document.querySelector('.theFollowing');
    var theFollowed = document.querySelector('.theFollowed');
    var followingUserList = document.querySelector('.following-user-list');
    var followedUserList = document.querySelector('.followed-user-list');
    var moreEmptyBox = document.querySelector('.moreEmpty-box');
    var myLikeItem = document.getElementById('myLike-item');
    var likeBox = document.querySelector('.like-box');

    for (var i = 0; i < selfListItem.length - 2; i++) {

        selfListItem[i].onclick = function() {
            for (var i = 0; i < selfListItem.length - 2; i++) {
                selfListItem[i].className = 'self-list-item';
                if (i == 3) {
                    likeBox.style.display = 'none';
                    followingBox.style.display = 'none';
                    articleBox.style.display = 'block';
                }
            }
            this.className = 'self-list-item current';
        }
        selfListItem[0].addclassname = 'self-list-item current';

    }


    for (var i = 0; i < moreList.length; i++) {
        moreList[i].onclick = function(e) {
            for (var i = 0; i < moreList.length; i++) {
                moreList[i].lastElementChild.style.display = 'none';
            }
            this.lastElementChild.style.display = 'block';
        }
    }
    for (var i = 0; i < moreList.length; i++) {
        moreList[i].onblur = function(e) {

            this.lastElementChild.style.display = 'none';
        }
    }

    myFollowingItem.onclick = function() {
        this.parentNode.style.opacity = '0';
        likeBox.style.display = 'none';
        articleBox.style.display = 'none';
        followingBox.style.display = 'block';
    }
    myLikeItem.onclick = function() {
        this.parentNode.style.opacity = '0';
        articleBox.style.display = 'none';
        followingBox.style.display = 'none';
        likeBox.style.display = 'block';
    }
    theFollowing.onclick = function() {
        moreEmptyBox.style.display = 'none';
        followedUserList.style.display = 'none';
        followingUserList.style.display = 'block';
    }
    theFollowed.onclick = function() {
        moreEmptyBox.style.display = 'none';
        followingUserList.style.display = 'none';
        followedUserList.style.display = 'block';
    }
    var backToSelf = document.getElementById('backToSelf');

    backToSelf.onclick = function() {
        selfContainer.style.display = 'none';
        selfInfo.style.display = 'block';
    }
})