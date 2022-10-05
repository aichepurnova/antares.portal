from django.db import models

LANGUAGES = (('1', 'Common'),
              ('2', 'Elvish'),
              ('3', 'Dragon'),
              ('4', 'Infernal'),
              ('5', 'Giant'),
              ('6', 'Abyss'))

class Character(models.Model):
    name = models.CharField(max_length = 140)
    race = models.CharField(max_length = 140)
    klass = models.CharField(max_length = 140)
    level = models.IntegerField(default=0)
    backstory = models.CharField(max_length = 140)
    
    image = models.ImageField(upload_to ='chars/chars/uploads/')

    # Stats
    stren = models.IntegerField(default=0)
    dext = models.IntegerField(default=0)
    consti = models.IntegerField(default=0)
    inte = models.IntegerField(default=0)
    wisd = models.IntegerField(default=0)
    charis = models.IntegerField(default=0)
    maxhp = models.IntegerField(default=0)
    Proficiency = models.IntegerField(default=0)

    # Other
    tools = models.TextField(max_length = 1000)
    Proficiencies = models.TextField(max_length = 1000)
    languages = models.TextField(max_length=140)
    skills = models.TextField()
    Equipment = models.TextField()
    gold = models.IntegerField(default=0)
    silver = models.IntegerField(default=0)
    cuprum = models.IntegerField(default=0)
    platinum = models.IntegerField(default=0)

    def __str__(self):
        return self.name
