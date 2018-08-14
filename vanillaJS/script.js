let selectedContent = document.getElementById('one');
selectedContent.style.display = 'block';
let selectedTab = document.getElementsByClassName('one')[0];
selectedTab.style.zIndex = "3";
const switchTab = (e, tab) => {
	selectedContent.style.display = 'none';
	selectedTab.style.zIndex = '1';
	selectedContent = document.getElementById(tab);
	selectedContent.style.display = 'block'
	e.style.zIndex = '3';
	selectedTab = e;
}
