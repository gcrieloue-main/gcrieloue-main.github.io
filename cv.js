
var cv=new Vue({
    el:"#cv",
    data:{
        workExperiences:[{fields:{title:''}}],
    paragraphs:{}
    },
    created:function(){
        this.getData();
    },
    methods:{
        getData(){
            getWorkExperiences().then(response => this.workExperiences=response);
            getCvParagraphs().then(response => this.paragraphs=response);
        }
    }
});
