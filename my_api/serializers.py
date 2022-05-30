from dataclasses import fields
from rest_framework import serializers
from .models import Resume

class ResumeSerializer(serializers.ModelSerializer):
 class Meta:
   model = Resume
   fields = ["start_date", "end_date", "job_title", "description", "company_link"]