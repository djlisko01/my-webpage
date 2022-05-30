from django.db import models

# Create your models here.
class Resume(models.Model):
  start_date = models.DateField()
  end_date = models.DateField(blank=True)
  job_title = models.CharField(max_length=20)
  description = models.TextField(blank=True)
  company_link = models.URLField(blank=True)

