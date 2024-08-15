from django.urls import path
from . import views

urlpatterns = [
    path("",views.index, name="home-page"),
    path("posts",views.posts, name="all-posts-page"),
    path("<slug:slug>",views.post_detail ,name="post-detail"),
]
