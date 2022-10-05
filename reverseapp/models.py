from django.db import models

# Create your models here.

class QuestionsBase(models.Model):
    """
    A typical class defining a model, derived from the Model class.
    """
    # Fields
    QuestionText = models.TextField(help_text="text of Question for the game", max_length=1000)
    QuestionNum = models.IntegerField(help_text="num of Question for the game")
    BaseText = models.CharField(help_text="Name of Base", max_length=140)
    BaseNum = models.IntegerField(help_text="Number of Base")
    ...
    # Metadata
    class Meta:
        ordering = ["BaseNum","QuestionNum"]
    # Methods
    def get_absolute_url(self):
         """
         Returns the url to access a particular instance of MyModelName.
         """
         return reverse('QuestionsBase-detail', args=[str(self.id)])

    def __str__(self):
        """
        String for representing the MyModelName object (in Admin site etc.)
        """
        return self.QuestionText

# class Participants(model.Model):
#     Names = models.TextField(help_text="Names", max_length=140)
    
#     def get_absolute_url(self):
#         return reverse('QuestionsBase-detail', args=[str(self.id)])

#     def __str__(self):
#         return self.QuestionText