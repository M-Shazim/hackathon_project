from django.db import models
from django.urls import reverse

# Create your models here.

class BlogModel(models.Model):
    author = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)

    title = models.CharField(max_length=400)
    description = models.CharField(max_length=800)
    slug = models.SlugField(default="",blank=True, null=False, db_index=True)
    
    content = models.TextField()
    reversed_content = models.TextField(blank=True, null=True)
    decipher_mode = models.BooleanField(default=False)

    views_count = models.PositiveIntegerField(default=0)

    quiz_questions = models.ManyToManyField("QuizQuestion", blank=True)

    def __str__(self):
        return f"Title: {self.title}"
    
    def save(self, *args, **kwargs):
        if self.content and not self.reversed_content:
            self.reversed_content = self.content[::-1]
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("post-detail", args=[self.slug])
    


    

class QuizQuestion(models.Model):
    question_text = models.CharField(max_length=300)
    answer_text = models.CharField(max_length=300)

    topic_title = models.CharField(max_length=400)

    def __str__(self):
        return f"Related topic: {self.topic_title}"


