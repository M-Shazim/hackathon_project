from django.shortcuts import render


from .models import BlogModel
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from django.template.loader import render_to_string


  
# Create your views here.

def index(request):
    return render(request, "Blog/index.html")


def posts(request):
    blog_model = BlogModel.objects.all() 
    for model in blog_model:
        model.decipher_mode = False
        model.save()
    return render(request, "Blog/all-posts.html", {
        "model" : blog_model,
    })


def post_detail(request,slug):
    
    blog = get_object_or_404(BlogModel, slug=slug)
    questions = blog.quiz_questions.all()

    if(request.method == "POST"):

        if "toggle_decipher" in request.POST:
            blog.decipher_mode = not blog.decipher_mode
            blog.save()
            return redirect("post-detail",slug=slug)

    print(blog.decipher_mode)

    return render(request, "Blog/post-detail.html",{
        "blog" : blog,
        "questions" : questions,
    })


def get_quiz_questions(request, post_id):
    post = get_object_or_404(BlogModel, id=post_id)
    questions = post.quiz_questions.all()
    html = render_to_string('quiz_questions.html', {'questions': questions})
    return JsonResponse({'html': html})
