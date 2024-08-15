from django.contrib import admin
from .models import QuizQuestion, BlogModel

# Register your models here.

class BlogAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug":("title",)}
    list_display = ("title",)



admin.site.register(BlogModel, BlogAdmin, )
admin.site.register(QuizQuestion, )

